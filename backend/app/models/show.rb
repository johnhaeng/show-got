class Show < ApplicationRecord
  belongs_to :city
  has_many :designers
  has_many :user_shows
  has_many :users, through: :user_shows
end
