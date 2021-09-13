package com.example.springreactspa;

import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("lang", LocaleContextHolder.getLocale());
        return "index";
    }

    @GetMapping("/**/{path:[^\\.]*}")
    public String forward() {
        return "forward:/";
    }

}
