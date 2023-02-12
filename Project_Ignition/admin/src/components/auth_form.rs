use yew::prelude::*;
use serde::Deserialize;
use gloo_net::http::Request;

#[derive(Properties, PartialEq)]
struct Authentication {
    email: String,
    password: String
}



#[function_component(AuthenticationForm)]
fn authentication_form(auth: i32) -> i32 {

}