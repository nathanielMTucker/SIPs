
//#[macro_use] extern crate rocket;
use crate::database::session;
pub mod database;

// Every call requires authentication or redirect to prompting authentication.
// CRUD support for User, Product, Product Collection.
// Limited access via HTTP API
// Users with access to /admin have greater to access to API. 
// Client side has access to Create, Read, Update and Recoverable Delete.

// Rocket/Rust for the server/API, Yew/Rust for the Admin page
// Surreal/SQL for the database and Vue/JS for the client

const _PORT: u16 = 8080;

fn main() {
    println!("Server listening on ::{_PORT}");
}
