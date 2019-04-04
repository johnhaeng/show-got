class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :img, :birthday, :location, :first_name, :last_name
end
