class LocationSerializer < ActiveModel::Serializer
  attributes :id, :address, :phone_number, :image_url
  has_many :doctors
end
