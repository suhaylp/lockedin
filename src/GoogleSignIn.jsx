import React, { useEffect } from "react";

const GoogleSignIn = () => {
    useEffect(() => {
      const initializeGoogleSignIn = () => {
        if (window.gapi) {
          window.gapi.signin2.render("googleSignInButton", {
            scope: "profile email",
            width: 240,
            height: 50,
            longtitle: true,
            theme: "dark",
            onsuccess: onSignIn,
            onfailure: onFailure,
          });
        }
      };
  
      // Load Google API library
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/platform.js";
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleSignIn;
      document.body.appendChild(script);
    }, []);
  
    const onSignIn = (googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send this to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    };
  
    const onFailure = (error) => {
      console.error("Google Sign-In failed:", error);
    };
  
    return (
      <div>
        <div id="googleSignInButton"></div>
      </div>
    );
  };
  
  export default GoogleSignIn;