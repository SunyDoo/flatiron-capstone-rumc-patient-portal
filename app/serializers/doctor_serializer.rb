class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :network, :image, :phone_number, :location
  has_one :location
end
