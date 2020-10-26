```plantuml
@startuml
autoactivate on

actor User
User -> "public/index.php" : access
  "public/index.php" -> "app/Application.php" : main()
    "app/Application.php" -> "app/Application.php" : services()
      participant "Phalcon/Mvc/Application.php" #99FF99
      "app/Application.php" -> "Phalcon/Mvc/Application.php" : setDI()
      return
    return
    "app/Application.php" -> "app/Application.php" : loaders()
      participant "Phalcon/Loader" #99FF99
      "app/Application.php" -> "Phalcon/Loader" : registerDirs()
      return
      "app/Application.php" -> "Phalcon/Loader" : register()
      return
    return
    participant "Phalcon/Mvc/Application" #99FF99
    "app/Application.php" -> "Phalcon/Mvc/Application" : handle()
    return
    participant "Phalcon/Http/Response" #99FF99
    "app/Application.php" -> "Phalcon/Http/Response" : send()
    return
  return
return

@enduml
