class Testimonial < ApplicationRecord
  belongs_to :patient
  belongs_to :location


  validates :location_id, presence: true
  validates :feedback, presence: true
end
