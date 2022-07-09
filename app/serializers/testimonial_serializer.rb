class TestimonialSerializer < ActiveModel::Serializer
  attributes :id, :recommend, :feedback
  has_one :patient
  has_one :location
end
