package com.example.springreactspa;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RestController
@RequestMapping("/locale/{locale:ja|en}")
public class LocaleController {

    @GetMapping("/translation.json")
    @ResponseBody
    public Map<String, String> translation(@PathVariable("locale") Locale locale, HttpServletRequest request, HttpServletResponse response) {
        Map<String, String> m = new HashMap<>();
        ResourceBundle messages;
        try {
            messages = ResourceBundle.getBundle("i18n/messages", locale);
            CookieLocaleResolver cookieLocaleResolver = new CookieLocaleResolver();
            cookieLocaleResolver.setLocale(request, response, locale);
        } catch (MissingResourceException ignore) {
            return m;
        }
        for (String key : messages.keySet()) {
            m.put(key, messages.getString(key));
        }
        return m;
    }

}
