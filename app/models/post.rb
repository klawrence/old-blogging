class Post < ApplicationRecord
  strip_attributes

  validates :title, length: { minimum: 2, maximum: 255}
  validates :body, length: { minimum: 2}
end
