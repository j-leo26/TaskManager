package com.JoseChavarro.taskManager.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class authController {
    
    @GetMapping("/login")
    public String loginPage(){
        return "login";
    }
}
