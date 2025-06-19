package com.JoseChavarro.taskManager.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class homeController {

    @GetMapping("/")
    public String home() {
        return "index";
    }
}
