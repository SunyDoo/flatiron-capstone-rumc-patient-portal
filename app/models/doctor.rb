class Doctor < ApplicationRecord
  belongs_to :location
  has_many :appointments
  has_many :patients, through: :appointments
end
