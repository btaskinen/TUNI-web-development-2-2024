# COMP.CS.510 Web Development 2 - Project work

The repository contains the course project for the Tampere University COMP.CS.510 Web Development 2 course which I took as part of the Knowledge-Intensive Software Development module in the spring of 2024.

The assignment was to develop a simple application for ordering a sandwich. The frontend is a simple React app which sends the orders to the backend via REST requests. The backend consists of two servers that communicate through a RabbitMQ message broker. Server A accepts the orders from the frontend and forwards them via message broker to server B, which "makes" the sandwitches.

The pdf-file [group_work_description.pdf](https://github.com/btaskinen/TUNI-web-development-2-2024/blob/main/group_work_description.pdf) describes the assignment in detail.

The pdf-file [Documentation.pdf](https://github.com/btaskinen/TUNI-web-development-2-2024/blob/main/Documentation.pdf) describes the realized project.

Starter code for the servers was provided by the course personel to get the project started. The project was completed as a solo work.

To run the application, from the root folder (TUNI-web-development-2-2024), run command:

`docker compose up -d`

This will create images and run the containers for the frontend and backend.

Open address `http://localhost:5173/` in browser to use frontend.

---

## Demo


https://github.com/user-attachments/assets/c91ad4f4-5625-49d1-9fff-ebab0abaa27f



