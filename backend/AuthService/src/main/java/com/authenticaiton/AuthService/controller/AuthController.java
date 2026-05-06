package com.authenticaiton.AuthService.controller;

import com.authenticaiton.AuthService.dto.*;
import com.authenticaiton.AuthService.jwt.JwtUtil;
import com.authenticaiton.AuthService.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Allow React frontend later
public class AuthController {

    @Autowired
    private AuthService authService;

    // POST /api/auth/signup
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignupRequest request) {
        try {
            MessageResponse response = authService.signup(request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse(e.getMessage()));
        }
    }

    // POST /api/auth/login
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {
        try {
            AuthResponse response = authService.login(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(401)
                    .body(new MessageResponse("Invalid credentials"));
        }
    }

    // GET /api/auth/verify  (Protected - needs JWT)
    @GetMapping("/verify")
    public ResponseEntity<?> verifyToken() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ResponseEntity.ok(Map.of(
                "valid", true,
                "username", auth.getName(),
                "authorities", auth.getAuthorities()
        ));
    }
}