---
layout: ../../layouts/BlogLayout.astro
title: "My Software Engineering Journey at MakeMyTrip: Transitioning to Corporate Life"
description: "Reflections on transitioning from university to corporate life as a Software Engineer at MakeMyTrip, working with high-scale systems, and what it takes to succeed in a fast-paced environment."
date: "2025-07-20"
---

Stepping out of the academic bubble and entering the corporate software engineering world can feel like jumping into a fast-flowing river. When I joined **MakeMyTrip (MMT)** as a Software Engineer, I knew I was entering a platform that handles millions of searches, bookings, and transactions daily. 

Transitioning from writing college projects to deploying production code that impacts millions of users is a massive leap. Here is a reflection on my journey, the learning curve I experienced, and the major lessons I’ve gathered along the way.

## The Scale Shock: Welcome to High-Scale Architecture

In college, your biggest database might have a few thousand rows, and a "high traffic load" is when three of your friends test your app at the same time. At MakeMyTrip, scale is a completely different beast. 

During my first few weeks, I was introduced to our service map. Seeing how microservices interact, how caching layers (like Redis and Memcached) are strategically placed, and how databases handle massive read/write ratios was eye-opening. 

I quickly learned that at scale, **performance and efficiency are not nice-to-haves; they are critical constraints.** A database query that takes 200ms might be acceptable on a local server, but under a load of 10,000 queries per second, it will completely crash the system. I had to shift my mindset from "does it work?" to "how well does it scale, and what is the latency footprint?"

## Learning the Corporate Tech Stack

While I came in with a strong background in native iOS development (Swift & SwiftUI), Go, Python, and system design, working on a corporate codebase introduced me to enterprise workflows:

*   **Robust Version Control:** Merge conflicts in a team of two are simple. Merge conflicts when dozens of engineers are pushing code to monorepos or dependent services require absolute clarity on git branching strategies.
*   **CI/CD Pipelines:** I learned the value of writing extensive test suites. Before a single line of code goes live, it has to pass rigorous unit testing, integration tests, and security scans.
*   **System Observability:** Understanding how to read logs, set up alerts, and monitor metrics using tools like Kibana and Grafana. If a service goes down, you need to find out why within seconds, not hours.

## Mentorship is a Two-Way Street

One of the highlights of my time at MakeMyTrip has been the culture of mentorship. I was fortunate to be surrounded by senior engineers and tech leads who took the time to review my code designs, explain structural choices, and push me to think critically about edge cases.

However, I also learned that mentorship is a two-way street. To make the most of it, I had to:
*   Do my homework before asking questions. Trying to debug and research the issue first makes discussions with senior developers much more productive.
*   Document what I learn so I don't ask the same question twice.
*   Be open to constructive criticism during code reviews. A pull request with comments is a learning goldmine.

## Moving Fast, Staying Grounded

Corporate software engineering is fast-paced. You are constantly building new features, fixing bugs, and optimizing systems. But as I grow in my career, my core mission remains the same: simplifying complexity and building products that make a positive human impact.

For any student or junior developer looking to break into corporate software engineering, my advice is to build a solid foundation in **System Design (HLD/LLD)** and **Data Structures & Algorithms**. Tools, frameworks, and languages will change, but the core principles of writing clean, maintainable, and scalable software are universal.
