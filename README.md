# README

# Chat space
## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,unique:true|
|email|string|null: false,unique:true|
|password|string|null: false|
### Association
- has_many :groups, through:groups_users
- has_many :messages
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,unique:true|
### Association
- has_many :users, through:groups_users
- has_many :groups_users
- has_many :messages

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :groups
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :groups

