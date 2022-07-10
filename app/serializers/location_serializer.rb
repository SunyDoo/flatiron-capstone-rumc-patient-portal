class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone_number, :zip_code, :image_url
  has_many :doctors
end
