// AuthController.java
package dani.proiect.controller;

import dani.proiect.dto.LoginRequest;
import dani.proiect.dto.RegisterRequest;
import dani.proiect.payload.ApiResponse;
import dani.proiect.payload.UserInfoResponse;
import dani.proiect.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse> register(@Valid @RequestBody RegisterRequest req) {
        ApiResponse resp = authService.register(req);
        return ResponseEntity.ok(resp);
    }

    @PostMapping("/login")
    public ResponseEntity<UserInfoResponse> login(@Valid @RequestBody LoginRequest req) {
        UserInfoResponse info = authService.authenticate(req);
        return ResponseEntity.ok(info);
    }
}