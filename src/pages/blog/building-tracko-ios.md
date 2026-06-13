---
layout: ../../layouts/BlogLayout.astro
title: "Crafting Tracko: Building a Local-First iOS App"
description: "A technical deep dive into how I built Tracko, a privacy-focused iOS expense manager, using SwiftUI for fluid UI, Core Data for offline storage, and WidgetKit for native Lock & Home screen integrations."
date: "2024-02-15"
---

In a digital era dominated by cloud-native SaaS platforms, it is easy to assume that every app needs a complex database cluster and a web of REST APIs. But when it comes to personal finance, users demand two major guarantees: **speed** and **privacy**. Nobody wants to wait for a spinning wheel to load their budget while standing at a grocery checkout counter, and nobody wants their sensitive transaction history stored on a random cloud server.

This was the design philosophy behind **Tracko**, my iOS expense manager: a native, privacy-first, local-first mobile application. 

Building a robust offline app on iOS comes with its own set of fascinating engineering challenges. Here is a technical breakdown of how I designed and built Tracko, using SwiftUI, Core Data, and WidgetKit.

---

## Designing a Modern, Declarative Interface in SwiftUI

SwiftUI has completely changed the game for Apple platform development. Coming from the legacy UIKit world, writing declarative code to define layouts is a breath of fresh air. 

In SwiftUI, the user interface is a direct function of state (`UI = f(State)`). When state changes, SwiftUI computes the differences in the view tree and performs highly optimized animations.

For Tracko, I wanted a fluid dashboard that includes:
*   Interactive category charts.
*   Recent transactions list with swipe-to-delete behaviors.
*   Quick-add buttons that pop up modal entry sheets.

Here is a simplified layout representation of the transaction input view, illustrating SwiftUI's clean declarative structure:

```swift
struct AddTransactionView: View {
    @Environment(\.managedObjectContext) private var viewContext
    @Environment(\.dismiss) private var dismiss
    
    @State private var amountText: String = ""
    @State private var category: String = "Food"
    @State private var date: Date = Date()
    @State private var note: String = ""

    var body: some View {
        NavigationStack {
            Form {
                Section(header: Text("Details")) {
                    TextField("Amount", text: $amountText)
                        .keyboardType(.decimalPad)
                    
                    Picker("Category", selection: $category) {
                        Text("Food").tag("Food")
                        Text("Transport").tag("Transport")
                        Text("Utilities").tag("Utilities")
                        Text("Entertainment").tag("Entertainment")
                    }
                    
                    DatePicker("Date", selection: $date, displayedComponents: .date)
                }
                
                Section(header: Text("Notes (Optional)")) {
                    TextField("Description", text: $note)
                }
            }
            .navigationTitle("New Expense")
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") { dismiss() }
                }
                ToolbarItem(placement: .confirmationAction) {
                    Button("Save") {
                        saveTransaction()
                    }
                    .disabled(amountText.isEmpty)
                }
            }
        }
    }
}
```

---

## Offline Data Management with Core Data

To guarantee offline access, Tracko stores all user transactions directly on the device. **Core Data** is Apple’s native object-graph management and persistence framework. While it is incredibly powerful, it can also be intimidating due to its strict thread safety rules.

### The Database Schema
For Tracko, the database model consists of two key entities linked via relationship:
1.  **CategoryEntity:** Stores category name, icon, budget limits, and hex color values.
2.  **TransactionEntity:** Stores amount, timestamp, short note, and a relationship reference to a `CategoryEntity`.

### The Core Data Stack Configuration
To avoid freezing the UI when a user enters data or updates charts, we manage separate contexts. Write tasks run on a background concurrent context, while the main thread context is reserved solely for UI fetches:

```swift
class PersistenceController {
    static let shared = PersistenceController()
    
    let container: NSPersistentContainer
    
    init() {
        container = NSPersistentContainer(name: "TrackoModel")
        container.loadPersistentStores { (storeDescription, error) in
            if let error = error as NSError? {
                fatalError("Unresolved error \(error), \(error.userInfo)")
            }
        }
        
        // Optimize for performance
        container.viewContext.automaticallyMergesChangesFromParent = true
        container.viewContext.mergePolicy = NSMergeByPropertyObjectTrumpMergePolicy
    }
    
    func saveContext() {
        let context = container.viewContext
        if context.hasChanges {
            do {
                try context.save()
            } catch {
                let nserror = error as NSError
                print("Error saving Core Data context: \(nserror)")
            }
        }
    }
}
```

By requesting `@FetchRequest` within SwiftUI, Core Data acts as a reactive publisher, automatically triggering UI updates whenever transactions are added or deleted.

---

## Extending the Experience to the Home and Lock Screens

One of Tracko’s most popular features is its home screen widget. By using **WidgetKit**, we allow users to monitor their daily budget progress or quickly launch the transaction entry modal without opening the app first.

Widgets do not run continuously. Doing so would destroy the iPhone’s battery life. Instead, widgets operate on a **timeline-based scheduler**:
1.  The app structures a `Timeline` of entries representing future states (e.g., updates every hour).
2.  When transactions occur in the app, we force an immediate widget reload using `WidgetCenter.shared.reloadAllTimelines()`.

With the launch of interactive widgets in iOS 17, we integrated **App Intents**. This allowed users to log recurring expenses (like public transport fares) directly from their Home Screen via a single tap on the widget, running background logic without ever launching the full app.

---

## Performance Tuning and Memory Audits

Building a local database application means you are directly responsible for the device's resources. During the testing phase, I noticed scrolling lags on users who had recorded over 1,500 transactions.

I fired up **Xcode Instruments** to profile the code:
*   **Fixing SwiftUI View Redraws:** I discovered that my custom bar charts were redrawing every time the keyboard opened. I fixed this by refactoring state variables and splitting subviews so that only the necessary inputs re-rendered.
*   **Core Data Batching:** Instead of loading all 1,500 transactions into memory at once, I implemented pagination on the transaction list. Using `fetchLimit` and `fetchOffset` capped initial memory overhead, dropping memory allocation from 120MB to a steady 28MB.
*   **Faulting:** I utilized Core Data's built-in "faulting" mechanism to keep lightweight references to database records, only fully pulling the large note fields when a user opens the details drawer.

---

## Native Development is Still King

Cross-platform frameworks have their place, but building with Apple’s native Swift ecosystem offers an unparalleled level of visual quality, performance, and hardware optimization. 

Tracko taught me that the best mobile apps are those that fit seamlessly into the user’s operating system—respecting their privacy, responding instantly, and integrating into their widgets and system sheets.

*Have you built a local-first mobile app? What is your favorite approach to database syncing? Let me know!*
