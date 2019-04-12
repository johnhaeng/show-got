class User < ApplicationRecord
  has_secure_password

  has_many :user_shows
  has_many :user_restaurants
  has_many :restaurants, through: :user_restaurants
  has_many :shows, through: :user_shows
end
