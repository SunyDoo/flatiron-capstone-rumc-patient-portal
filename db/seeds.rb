
# Patient.destroy_all
# Location.destroy_all
# Doctor.destroy_all


puts "🌱 Seeding..."

# puts "Creating patients..."
# patient_1 = Patient.create(username: "SNilavarath", password: "123", first_name: "Sunil", last_name: "Nilavarath", insurance: "1199" )
# patient_2 = Patient.create(username: "MNilavarath", password: "123", first_name: "Maegha", last_name: "Nilavarath", insurance: "EMBLEM" )
# patient_3 = Patient.create(username: "Rpisciot", password: "123", first_name: "Rachel", last_name: "Pisciotta", insurance: "BCBS" )
# patient_4 = Patient.create(username: "AKandy", password: "123", first_name: "Ashish", last_name: "Kandy", insurance: "MEDICARE" )

# puts "Creating locations..."
# location_1 = Location.create(name: "Main Hospital Campus", address: "355 Bard Avenue", phone_number: "718.818.1234", zip_code: 10310, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/12/RUMC-Building-768x512.jpg" )
# location_2 = Location.create(name: "Breast and Womens Center", address: "1161 Victory Blvd", phone_number: "718.818.4020", zip_code: 10301, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/09/1161-Victory-768x512.jpg" )
# location_3 = Location.create(name: "Cardiopulmonary Rehab", address: "288 Kissel Avenue", phone_number: "718.818.2515", zip_code: 10310, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/12/Cardio-Front-768x512.jpg" )
# location_4 = Location.create(name: "Center for Cancer Care", address: "1000 South Avenue", phone_number: "718.818.3000", zip_code: 10314, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/09/Burst-Cancer-Care-Center-768x512.jpg" )
# location_5 = Location.create(name: "Endocrinology Center: Staten Island", address: "1366 Victory Blvd", phone_number: "718.727.1366", zip_code: 10301, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/1366-victory_v2-768x512.jpg" )
# location_6 = Location.create(name: "Family Health Center", address: "800 Castleton Avenue", phone_number: "718.818.4570", zip_code: 10310, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/09/800-Castleton-Ave-768x512.jpg" )
# location_7 = Location.create(name: "OB/GYN Services: Staten Island", address: "11 Ralph Place", phone_number: "718.720.4130", zip_code: 10304, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/locations_0001_11-Ralph-Place-Both-Suites-768x512.jpg" )
# location_8 = Location.create(name: "Primary Care and Gastroenterology: Staten Island", address: "3700 Richmond Avenue", phone_number: "718.948.8111", zip_code: 10312, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/locations_0002_3700-Richmond-Ave.-768x512.jpg" )
# location_9 = Location.create(name: "Primary Walk-In/Cardiology: Staten Island", address: "1058 Forest Avenue", phone_number: "718.818.1058", zip_code: 10310, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/1058-Forest_v2-768x512.jpg" )
# location_10 = Location.create(name: "Primary Walk-In/Immediate Care Center", address: "4360 Hylan Blvd", phone_number: "718.818.4360", zip_code: 10312, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/primary-care-hylan-blvd-768x512.jpg" )
# location_11 = Location.create(name: "Urology Services: Staten Island", address: "1200 South Avenue", phone_number: "718.370.1400", zip_code: 10314, image_url: "https://www.rumcsi.org/wp-content/uploads/2021/01/1200-South-768x512.jpg" )
# location_12 = Location.create(name: "The Center For Integrative Behavioral Medicine", address: "1130 South Avenue", phone_number: "718.818.6132", zip_code: 10314, image_url: "https://www.rumcsi.org/wp-content/uploads/2020/09/1130-768x512.jpg" )

# puts "Creating doctors..."
# doctor_1 = Doctor.create(location_id: 1, name: "Adebayo Adeyinka, MD", specialty: "Critical Care" , network: ["1199", "AETNA", "EMBLEM"], phone_number: "718.250.8525", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/AAEAAQAAAAAAAAWMAAAAJDFiYjg4MTg4LWYzNjktNDdiNS05OGZmLTkzNjM3MTEwODI0Mw1.jpg" )
# doctor_2 = Doctor.create(location_id: 1, name: "Michael Zeidman, MD", specialty: "General Surgery" , network: ["MEDICARE", "AARP", "EMBLEM"], phone_number: "718.743.3121", image: "https://www.rumcsi.org/wp-content/uploads/2021/04/Best-768x1151.jpg" )
# doctor_3 = Doctor.create(location_id: 1, name: "Frank Acerra, DO", specialty: "Critical Care" , network: ["1199", "NYSNA", "BCBS"], phone_number: "718.816.6440", image: "https://www.rumcsi.org/wp-content/uploads/2020/10/acerraf1-1.jpg" )

# doctor_4 = Doctor.create(location_id: 2, name: "Michael Benson, MD", specialty: "OB/GYN" , network: ["AARP", "AETNA", "UNITEDHEALTHCARE"], phone_number: "718.273.5500", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Benson-Michael-768x960.jpeg" )
# doctor_5 = Doctor.create(location_id: 2, name: "Aldo Arpaia, MD", specialty: "Medicine" , network: ["MEDICAID", "1199", "BCBS"], phone_number: "718.727.1898", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/Arpaia-Aldo-768x905.jpg" )
# doctor_6 = Doctor.create(location_id: 2, name: "Suzy Bibawy, MD", specialty: "Medicine" , network: ["1199", "NYSNA", "EMBLEM"], phone_number: "718.818.5584", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Bibawy-Suzy-768x960.jpeg" )

# doctor_7 = Doctor.create(location_id: 3, name: "Paramanathan Ahilan, MD", specialty: "Cardiology" , network: ["1199", "MEDICAID", "MEDICARE"], phone_number: "718.981.2684", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/Ahilan-Para--768x960.jpeg" )
# doctor_8 = Doctor.create(location_id: 3, name: "Radu Ariton, MD", specialty: "Pulmonary" , network: ["AARP", "AETNA", "UNITEDHEALTHCARE"], phone_number: "718.981.0370", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/d33u0k6qsi-768x905.jpg" )
# doctor_9 = Doctor.create(location_id: 3, name: "Keith Diaz, MD", specialty: "Pulmonary" , network: ["1199", "BCBS", "EMBLEM"], phone_number: "718.818.1058", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Diaz-Keith-768x512.jpg" )

# doctor_10 = Doctor.create(location_id: 4, name: "Thomas Forlenza, MD", specialty: "Oncology" , network: ["AARP", "MEDICARE", "NYSNA"], phone_number: "718.816.4949", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Forlenza-Thomas-768x960.jpeg" )
# doctor_11 = Doctor.create(location_id: 4, name: "Seetha Murukutla, MD", specialty: "Oncology" , network: ["1199", "AETNA", "MEDICAID"], phone_number: "718.273.2277", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/2-MURUKUTLA-Seetha--768x960.jpg" )
# doctor_12 = Doctor.create(location_id: 4, name: "Victoria Forte, MD", specialty: "Oncology" , network: ["UNITEDHEALTHCARE", "1199", "EMBLEM"], phone_number: "718.816.4949", image: "https://www.rumcsi.org/wp-content/uploads/2021/08/Dr.-Forte.jpg" )

# doctor_13 = Doctor.create(location_id: 5, name: "Lina Leykina, MD", specialty: "Endocrinology" , network: ["UNITEDHEALTHCARE", "AETNA", "MEDICAID"], phone_number: "718.727.1366", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Leykina-Lina-768x1152.jpg" )
# doctor_14 = Doctor.create(location_id: 5, name: "Philip Otterbeck, MD", specialty: "Endocrinology" , network: ["1199", "AETNA", "MEDICARE"], phone_number: "718.727.1366", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Otterbeck-Philip-E-768x1152.jpg" )
# doctor_15 = Doctor.create(location_id: 5, name: "Mark Sheynshteyn, DO", specialty: "Endocrinology" , network: ["BCBS", "UNITEDHEALTHCARE", "EMBLEM"], phone_number: "718.727.1366", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/mark.jpg" )

# doctor_16 = Doctor.create(location_id: 6, name: "Marianne LaBarbera, MD", specialty: "Family Practice" , network: ["1199", "AARP", "EMBLEM"], phone_number: "718.818.1162", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/La-Barbera-Marianne.jpg" )
# doctor_17 = Doctor.create(location_id: 6, name: "Nepola Neil, MD", specialty: "Family Practice" , network: ["EMBLEM", "AETNA", "MEDICAID"], phone_number: "718.667.6767", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Nepola-Neil.jpg" )
# doctor_18 = Doctor.create(location_id: 6, name: "Vladimir Barayev, MD", specialty: "Family Practice" , network: ["UNITEDHEALTHCARE", "AETNA", "NYSNA"], phone_number: "718.876.1732", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/Barayev-Vladimir-768x1024.jpg" )

# doctor_19 = Doctor.create(location_id: 7, name: "Anna Pavlides, MD", specialty: "OB/GYN" , network: ["AARP", "AETNA", "UNITEDHEALTHCARE"], phone_number: "718.273.5500", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Pavlides-Anna-768x816.jpg" )
# doctor_20 = Doctor.create(location_id: 7, name: "Rita Shats, MD", specialty: "OB/GYN" , network: ["1199", "MEDICAID", "AETNA"], phone_number: "718.273.5500", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Shats-Rita-768x1034.jpg" )
# doctor_21 = Doctor.create(location_id: 7, name: "Michael Cabbad, MD", specialty: "OB/GYN" , network: ["NYSNA", "BCBS", "EMBLEM"], phone_number: "718.818.2979", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Cabbad-Michael-768x927.jpg" )

# doctor_22 = Doctor.create(location_id: 8, name: "Wallen Chan, M.D.", specialty: "Medicine" , network: ["MEDICARE", "AARP", "MEDICAID"], phone_number: "718.448.1122", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/w.-chan.jpg" )
# doctor_23 = Doctor.create(location_id: 8, name: "Magda Daoud, MD", specialty: "Gastroenterology" , network: ["1199", "AETNA", "UNITEDHEALTHCARE"], phone_number: "718.720.5928", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/daoud.jpg" )
# doctor_24 = Doctor.create(location_id: 8, name: "Richard Fazio, MD", specialty: "Gastroenterology" , network: ["BCBS", "MEDICARE", "EMBLEM"], phone_number: "718.967.4048", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Fazio-Richard-768x960.jpeg" )

# doctor_25 = Doctor.create(location_id: 9, name: "Seth Brum, MD", specialty: "Medicine" , network: ["NYSNA", "BCBS", "1199"], phone_number: "718.477.6900", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Brum-Seth-768x905.jpg" )
# doctor_26 = Doctor.create(location_id: 9, name: "Nidal Isber, MD", specialty: "Cardiology" , network: ["MEDICARE", "MEDICAID", "EMBLEM"], phone_number: "718.818.3260", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/ISBER-M.D.-NIDAL-46299-768x905.jpg" )
# doctor_27 = Doctor.create(location_id: 9, name: "Sean Galligan, MD", specialty: "Cardiology" , network: ["UNITEDHEALTHCARE", "AETNA", "EMBLEM"], phone_number: "718.818.2805", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Galligan-Sean-768x1024.jpg" )

# doctor_28 = Doctor.create(location_id: 10, name: "Phillip Cosentino, MD", specialty: "Pulmonary" , network: ["1199", "NYSNA", "MEDICAID"], phone_number: "718.816.0034", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Dr.-Costentino-head-shot.jpg" )
# doctor_29 = Doctor.create(location_id: 10, name: "Melissa Grageda, MD", specialty: "Critical Care" , network: ["UNITEDHEALTHCARE", "AETNA", "EMBLEM"], phone_number: "718.818.4636", image: "https://www.rumcsi.org/wp-content/uploads/2022/05/Grageda-768x1125.jpg" )
# doctor_30 = Doctor.create(location_id: 10, name: "Stephen Erosa, DO", specialty: "Family Practice" , network: ["BCBS", "AARP", "EMBLEM"], phone_number: "718.818.1161", image: "https://www.rumcsi.org/wp-content/uploads/2021/04/Erosa-Headshot-768x1151.jpg" )

# doctor_31 = Doctor.create(location_id: 11, name: "Jay Basillote, MD", specialty: "Urology" , network: ["1199", "AETNA", "BCBS"], phone_number: "718.774.8386", image: "https://www.rumcsi.org/wp-content/uploads/2020/11/Basillote-Jay-768x960.jpeg" )
# doctor_32 = Doctor.create(location_id: 11, name: "Michael Brodherson", specialty: "Urology" , network: ["UNITEDHEALTHCARE", "MEDICARE", "EMBLEM"], phone_number: "718.370.1400", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/d5500vdw3w.jpg" )
# doctor_33 = Doctor.create(location_id: 11, name: "Yaniv Larish", specialty: "Urology" , network: ["MEDICAID", "AARP", "NYSNA"], phone_number: "718.370.1400", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Larish-Yaniv.jpg" )

# doctor_34 = Doctor.create(location_id: 12, name: "Joel Idowu, MD", specialty: "Psychiatry" , network: ["1199", "NYSNA", "AARP"], phone_number: "718.273.6641", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Idowu-Joel-768x960.jpeg" )
# doctor_35 = Doctor.create(location_id: 12, name: "Salim Hussain, MD", specialty: "Psychiatry" , network: ["BCBS", "MEDICAID", "MEDICARE"], phone_number: "718.818.6131", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Hussain-Salim-768x905.jpg" )
# doctor_36 = Doctor.create(location_id: 12, name: "Jo Desantis, MD", specialty: "Psychiatry" , network: ["UNITEDHEALTHCARE", "AETNA", "EMBLEM"], phone_number: "718.818.5385", image: "https://www.rumcsi.org/wp-content/uploads/2020/12/Desantis-Jo-768x905.jpg" )


puts "✅ Done seeding!"