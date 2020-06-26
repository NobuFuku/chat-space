# README

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
|group|string|null: false,unique:true|
|use_id|integer|null: false, foreign_key: true|
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
|image||
|use_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user


