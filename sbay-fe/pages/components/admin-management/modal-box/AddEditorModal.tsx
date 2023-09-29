import React, { useState } from "react";
import Modal from "react-modal";

// Khởi tạo modal
Modal.setAppElement("#__next");

interface AddPostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AddPostModal: React.FC<AddPostModalProps> = ({ isOpen, onRequestClose }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý gửi form
    onRequestClose(); // Đóng modal sau khi gửi thành công
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Thêm mới bài viết"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <h2>Thêm mới bài viết</h2>
        <form onSubmit={handleFormSubmit}>
          {/* Các trường nhập thông tin */}
          <div className="mb-6">
            <label htmlFor="image">Ảnh</label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: "200px" }} />}
          </div>
          {/* Các trường nhập thông tin khác */}
          <button type="submit">Lưu</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddPostModal;
