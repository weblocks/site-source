```uml
@startuml
skinparam usecase {
  BorderColor blue
  BackgroundColor lightBlue
  ArrowColor blue
}
rectangle License {
  (Weblocks)-d->(Phalcon)
  Weblocks-d->(PHP)
  Weblocks-d->(Bootstrap)
  Weblocks-d->(CSS)
  Weblocks-d->(JavaScript)
  (Phalcon)-d->(PHP)
  Phalcon-d->(DBMS)
  PHP-d->(Apache)
  Apache-d->(Linux)
  DBMS-d-> Linux
  Bootstrap-d->CSS
  Bootstrap-d->JavaScript
  CSS-d->(Browser)
  JavaScript-d->Browser
  Browser-d->Linux
  Linux-l->(Network)
  Linux-r->(Security)
}
@enduml
```
