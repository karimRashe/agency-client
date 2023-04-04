import React from 'react';

const LastBanner = () => {
    return (
        <div className=''>
        <div class="hero min-h-screen  grid gap-2 grid-cols-1 bg-secondary">
  <div class="hero-content flex-col lg:flex-row-reverse  max-w-7xl mx-auto px-12">
    
    <div class="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100 ">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered" />
         <br/>
<label>
          <textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Send</button>
        </div>
      </div>
    </div>


    <div class="text-center text-white lg:text-left py-12">
      <h1 class="text-5xl font-bold ">Let us handle your project, professionally.!</h1>
      <p class="py-6">With well written codes, we build amazing apps for all platforms, mobile and web apps in genera.</p>
    </div>

  </div>

</div>
</div>
    );
};

export default LastBanner;