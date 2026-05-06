package com.authenticaiton.AuthService.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {

    @NotBlank(message = "Username or email is required")
    private String usernameOrEmail;

    @NotBlank(message = "Password is required")
    private String password;

    // Manual Getters (in case Lombok fails)
    public String getUsernameOrEmail() { return usernameOrEmail; }
    public String getPassword() { return password; }

    // Manual Setters
    public void setUsernameOrEmail(String usernameOrEmail) { this.usernameOrEmail = usernameOrEmail; }
    public void setPassword(String password) { this.password = password; }
}