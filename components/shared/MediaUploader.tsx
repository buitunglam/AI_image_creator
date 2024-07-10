import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { CldUploadWidget } from "next-cloudinary";

interface MediaUploadProps {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  image: any;
  publicId: string;
  type: any;
}

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploadProps) => {
  const { toast } = useToast();
  const onUploadSuccessHandler = () => {
    toast({
      title: "Image upload successfully",
      description: "Please try again",
      duration: 500,
      className: "success-toast",
    });
  };

  const onUploadErrorHandler = () => {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 500,
      className: "error-toast",
    });
  };

  return (
    <CldUploadWidget
      uploadPreset="imaginify"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    ></CldUploadWidget>
  );
};

export default MediaUploader;
