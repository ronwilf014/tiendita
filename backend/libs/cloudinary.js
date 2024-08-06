import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dlur0ulze', 
  api_key: '484275713219114', 
  api_secret: '-am8_lS_iDQlzdz91gJOMbVPPkc' 
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "products",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
}
