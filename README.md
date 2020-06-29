# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# chat-spaceb DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|eamil|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :messages
- has_many :comments

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|unll: false|
|user_id|integer|null: false|

### Association
- has_many : users


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
|user_id|integer|null: false|
|inage|string|null: false|
|group_id|integer|null: false|
|body|text|null: false|

### Association
- has_many :comments
- belongs_to :groups_users

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|messages_id|integer|null: false|
|user_id|integer|null: false|

### Association
- belongs_to :messges