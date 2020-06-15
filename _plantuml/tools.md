```uml
@startuml
rectangle Tools {
  (GitHub)
  (git)
  (vim)
  GitHub -[hidden]d- git
  git -[hidden]d- vim
}
@enduml
```
