class City < ApplicationRecord
  has_many :shows
  has_many :designers, through: :shows
end
