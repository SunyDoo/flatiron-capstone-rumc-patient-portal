class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :network, :image, :phone_number
  has_one :location
end
