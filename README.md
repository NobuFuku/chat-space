# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

# Chat space
## userテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null: false,unique:true|
|email|string|null: false,unique:true|
|password|string|null: false|
### Association
- has_many :group
- has_many :messages
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false,unique:true|
|use_id|string|null: false|
### Association
- belongs_to :user
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|use_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
