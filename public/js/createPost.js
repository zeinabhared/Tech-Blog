const createPostHandler = async(event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="title"]').value;
    const content = document.querySelector('input[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.create-post-form').addEventListener('submit', createPostHandler);