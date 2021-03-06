
export const ttl = 600;

export const getUser = qs => ({
  qs,
  url: '/user'
});

export const createUser = data => ({
  body: { data },
  method: 'post',
  url: '/user'
});

export const updateUser = (userId, data) => ({
  body: {
    data,
    userId
  },
  method: 'put',
  url: '/user'
});

export const getUserCount = () => ({
  useCache: true,
  url: '/user/count',
});

/* =========================================================== */

export const getResume = qs => ({
  qs,
  url: '/resume',
});

export const updateResume = ({ userId, login, resume }) => ({
  body: {
    login,
    resume,
    userId,
  },
  method: 'put',
  url: '/resume',
});

export const getResumeInfo = qs => ({
  qs,
  url: '/resume/information',
});

export const setResumeInfo = ({ userId, login, info }) => ({
  body: {
    info,
    login,
    userId
  },
  method: 'put',
  url: '/resume/information',
});

export const patchResumeReminder = ({ userId, login, reminder }) => ({
  body: {
    login,
    userId,
    reminder,
  },
  method: 'patch',
  url: '/resume/reminder',
});

export const getResumeCount = () => ({
  useCache: true,
  url: '/resume/count',
});
