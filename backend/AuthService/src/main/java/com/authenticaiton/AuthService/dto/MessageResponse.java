package com.authenticaiton.AuthService.dto;

public class MessageResponse {
    private String message;

    // No-arg constructor
    public MessageResponse() {}

    // String constructor
    public MessageResponse(String message) {
        this.message = message;
    }

    // Getter and Setter
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}