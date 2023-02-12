mod routes;

#[macro_use]
extern crate rocket;

#[get("/")]
pub fn hello() -> &'static str {
    "Hello World"
}
