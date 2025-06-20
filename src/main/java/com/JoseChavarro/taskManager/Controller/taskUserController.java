package com.JoseChavarro.taskManager.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class taskUserController {

    @GetMapping("/task")
    public String home() {
        return "TaskIndexUser";
    }
}