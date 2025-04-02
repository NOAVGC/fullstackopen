```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created
    deactivate server
    Note left of server: Newly created note is added to server database with timestamp
    Note right of browser: Browser renders list with new note without refreshing or redirect
```