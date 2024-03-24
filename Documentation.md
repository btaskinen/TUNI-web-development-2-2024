# Documentation "Order A Sandwich"-App

## Project Plan

### Group Information

**Group Member**<br>
Barbara Taskinen<br>
**Email:** barbara.taskinen@tuni.fi<br>
**Student ID:** tuni.fi:K80453<br>

**Group Name**: GroupBT<br>
**GitLab repo URL**: https://course-gitlab.tuni.fi/compcs510-spring2024/groupbt

### Working during the project

Group Member Barbara Taskinen will commit 4 - 6 hours per week to the project. As Barbara is the only group member, she will be responsible for the implementations for all the components of the application.

Initially, 23 issues were created in GitLab, based on the projected description. Likely, more issues will be added when to project progresses. Each issue was given an estimated due date for completion to ensure that the work is evenly spread out over the availiable time frame.

## Documentation of the created system

### System architecture

```mermaid
flowchart LR
    A(Frontend) -->|POST /order| B(Server A)
    A --> |GET /order| B
    B --> |response GET /order & GET /order/orderId| A
    B --> |sandwitch status| A
    B --> |sandwitch order| C(Message Broker)
    B --> |store sandwitch order| E(Database)
    E --> |retrieve sandwitch order|B
    C --> |sandwitch status| B
    C -->|sandwitch order| D[Server B]
    D -->|sandwitch status| C
```

### Used technologies

#### "Make me a Sandwitch" Swagger API

Provided by course personnel.<br>
Provides the base for Server A.

#### Server A

Node.js server.<br>
Receives REST API requests from Frontend about new orders placed and respondes to Frontend request with available sandwitch orders. Server A is connected to Frontend via WebSocket to publish updates about sandwitch status.
When Server A receives new order from Frontend, sandwitch order is stored in database and sends message to Message Queue 1 or message broker about new order.

#### Database

MongoDB database.<br>
Stores all the order Server A has received.

#### Server B

Node.js server.<br>
Server B "makes" the sandwitch. It subscirbes to message broker Message Queue 1. Whenever it receives a new message, it will "make" the sandwitch: after a set delay, Server B will send message to message broker's Message Queue 2 that the sandwitch is ready (sandwitch order fulfilled).

#### Message Broker

RabbitMQ.<br>
Message broker with two message queues. Message Queue 1 sends information about new sandwitch orders. Message Queue 2 sends information about sandwitch order status.

#### Frontend (Client)

React Vite App written in TypeScript.<br>
Uses REST calls to place sandwitch order to Server A and to retrieve available orders from Server A. Connects to Server A through WebSocket to receive updates on sandwitch status.

### How the produced system can be tested

_Groups also must document where the components of their system are placed in the repository, and how the course personnel can deploy the group's system on their own computers when testing it._

## Learning Diary

- 2024-03-23 Created issues based on [Group Project description](https://moodle.tuni.fi/pluginfile.php/4170962/mod_label/intro/Group%20project.pdf?time=1709636527702).
- 2024-03-24 Created draft of Project Documentation [Issue #22](https://course-gitlab.tuni.fi/compcs510-spring2024/groupbt/-/issues/22).

## Learned issues
