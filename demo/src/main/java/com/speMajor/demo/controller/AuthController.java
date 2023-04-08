//package com.speMajor.demo.controller;
//
//import com.speMajor.demo.payload.JwtAuthRequest;
//import com.speMajor.demo.payload.JwtAuthResponse;
//import com.speMajor.demo.security.JwtTokenHelper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/v1/auth")
//public class AuthController {
//    @Autowired
//    private JwtTokenHelper jwtTokenHelper;
//    @Autowired
//    private UserDetailsService userDetailsService;
//    @Autowired
//    private AuthenticationManager authenticationManager;
//    @PostMapping("/login")
//    public ResponseEntity<JwtAuthResponse> createToken(@RequestBody JwtAuthRequest request){
//        this.authenticate(request.getUsername(),request.getPassword());
//        UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());
//        String token = this.jwtTokenHelper.generateToken(userDetails);
//
//        JwtAuthResponse response = new JwtAuthResponse();
//        response.setToken(token);
//       // response.setUser(this.mapper.map((User) userDetails, UserDto.class));
//        return new ResponseEntity<JwtAuthResponse>(response, HttpStatus.OK);
//    }
//
//    private void authenticate(String username, String password) {
//        UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(username,password);
//        this.authenticationManager.authenticate(authenticationToken);
//    }
//}
