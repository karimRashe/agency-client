import React from 'react';

const BookingModal = ({book}) => {
    const {name} = book;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
       <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h2 class="font-bold text-lg">Booking Service for:{name}!</h2>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="booking-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;