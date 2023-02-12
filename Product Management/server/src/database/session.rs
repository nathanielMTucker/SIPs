use mysql::{*, prelude::Queryable};
//use mysql::prelude::*;
//use chrono::prelude::*;

use super::structures::{
    User,
    Product
};

fn connect(url: &str) -> PooledConn {
    let pool = Pool::new(url).unwrap();
    pool.get_conn().unwrap()
}

pub fn get_user(name : String) -> Vec<User> {
    let mut _conn = connect("mysql://root:{password}@localhost:5432");
    let _response = _conn.query_map("select id, name, username, privilege, password from USER where name = {name}", 
        |(id, name, username, privilege, password)|
        User {
            id,
            name,
            password,
            username,
            privilege
        }
    )
    .expect("Unable to get User");
    _response
}


pub fn create_user(uri : &str, new_user : &User) -> () {
    let mut _conn: PooledConn = connect(uri);

    let _result = _conn.exec_drop("insert into USER (id, name, username, privilege, password ) values (:id, :name, :username, :privilege, :password)",
    params! {
        "id" => &new_user.id,
        "name" => &new_user.name,
        "username" => &new_user.username,
        "privilege" => &new_user.privilege,
        "password" => &new_user.password
    })
    .expect("Failed into insert into User");
    _result
}