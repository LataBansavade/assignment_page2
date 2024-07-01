'use client';
import React, { useState, ChangeEvent } from 'react';
const Profile: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className='profileDiv'>
      <div className='topDiv'>
        <div style={{ display: 'flex' }}>
          <img
            className='roundImg'
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
            alt='Profile'
            onError={(e) => (e.currentTarget.src = 'defaultImagePath')}
          />
          <h3>Russel Sims</h3>
        </div>
        <div style={{ display: 'flex' }}>
          <p>21/04/2022</p>
          <button>Delete</button>
        </div>
      </div>

      <div className='middleDiv'>
        <div className='ImgDiv'>
          {image && <img alt="preview image" src={image} width="250px" height="230px" />}
          <input type="file" onChange={onImageChange} className="filetype" />
        </div>
        <div className='midCenterDiv'>
          <p>ROLE</p>
          <select>
            <option value='Employee'>Admin</option>
            <option value='admin'>Admin</option>
            <option value='user'>User</option>
          </select>
          <p>TEAM</p>
          <label style={{ fontSize: '10px' }}>HR</label>
          <select>
            <option value='Team A'>Kate Middleeton</option>
            <option value='Team A'>Kate Middleeton</option>
            <option value='Team A'>Kate Middleeton</option>
            <option value='Team A'>Kate Middleeton</option>
          </select>
          <label style={{ fontSize: '10px' }}>Manager</label>
          <select>
            <option value='Team A'>Team A</option>
            <option value='Team B'>Team B</option>
            <option value='Team C'>Team C</option>
          </select>
          <label style={{ fontSize: '10px' }}>Lead</label>
          <select>
            <option value='Team A'>Team A</option>
            <option value='Team B'>Team B</option>
            <option value='Team C'>Team C</option>
          </select>
        </div>
        <div>
          <p>ONBOARDING</p>
          <label style={{ fontSize: '10px' }}>Starts On</label>
          <input type='date' />
          <p>Onboarding Required</p>
          <label style={{ fontSize: '10px' }}>Current Status</label>
        </div>
      </div>

      <div className='bottomDiv'>
        <div>
          <p>EMPLOYEE DETAILS</p>
          <form>
            <label style={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}>Name
              <input type='text' placeholder='enter your name' />
            </label>
            <label style={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}>Last Name
              <input type='text' placeholder='enter your last name' />
            </label>
            <label style={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}>Email
              <input type='email' placeholder='enter your email' />
            </label>
            <label style={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}>Phone number
              <input type='text' placeholder='enter your Phone number' />
            </label>
            <label style={{ fontSize: '10px', display: 'flex', flexDirection: 'column' }}>Position
              <input type='text' placeholder='Position' />
            </label>
            <button type='button'>Save Changes</button>
            <button type='button'>Cancel</button>
          </form>
        </div>

        <div className='botRight'>
          <div className='botRightdiv'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p>office Tour</p>
            <p>0%</p>
          </div>

          <div className='botRightdiv'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p>office Tour</p>
            <p>0%</p>
          </div>

          <div className='botRightdiv'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p>office Tour</p>
            <p>0%</p>
          </div>

          <div className='botRightdiv'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p>office Tour</p>
            <p>0%</p>
          </div>

          <div className='botRightdiv'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p>office Tour</p>
            <p>0%</p>
          </div>

          <div className='botRightdiv'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p>office Tour</p>
            <p>0%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
