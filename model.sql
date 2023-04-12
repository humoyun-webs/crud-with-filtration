create database products;

create type product_status as enum('complited','inprogres','');

create table product(
    product_id  serial primary key not null,
    product_name varchar(255) not null,
    product_title varchar(32) not null unique,
    product_desc text not null,
    product_created_at timestamp default current_timestamp,
    product_updated_at timestamp default null,
    product_isDelete BOOLEAN NOT NULL DEFAULT FALSE,
    product_Status product_status default '' not null
    );