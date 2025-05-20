package dani.proiect.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ProfileController {

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated");
        }

        String username = authentication.getName();

        // Exemplu hardcodat (în practică iei din DB sau JWT claims)
        Map<String, Object> profile = new HashMap<>();
        profile.put("username", username);
        profile.put("email", username + "@example.com");
        profile.put("role", "USER");

        return ResponseEntity.ok(profile);
    }
}