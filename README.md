# Exercise: designing functions

1. Run `tsc --init`. 

    Run `tsc`. Notice that the project doesn't know about module `node-fetch`. Let's install it.
2. `npm install node-fetch`

    Oh no, `tsc` still has a (different) error, because it can't find the Typescript type definitions for `node-fetch`:

    ```
    index.ts:1:19 - error TS7016: Could not find a declaration file for module 'node-fetch'. '/Users/arosien/uw/exercise-designing-functions/node_modules/node-fetch/lib/index.js' implicitly has an 'any' type.

    Try `npm i --save-dev @types/node-fetch` if it exists or add a new declaration (.d.ts) file containing `declare module 'node-fetch';`
    ```

3. Run `npm i --save-dev @types/node-fetch`.

    Voila! Now `tsc` compiles our code successfully. Let's run our program.

4. Run `node index.js` and you should see some output like:

    ```
    {
      page: 1,
      per_page: 6,
      total: 12,
      total_pages: 2,
      data: [
        {
          id: 1,
          email: 'george.bluth@reqres.in',
          first_name: 'George',
          last_name: 'Bluth',
          avatar: 'https://reqres.in/img/faces/1-image.jpg'
        },
        {
          id: 2,
          email: 'janet.weaver@reqres.in',
          first_name: 'Janet',
          last_name: 'Weaver',
          avatar: 'https://reqres.in/img/faces/2-image.jpg'
        },
        {
          id: 3,
          email: 'emma.wong@reqres.in',
          first_name: 'Emma',
          last_name: 'Wong',
          avatar: 'https://reqres.in/img/faces/3-image.jpg'
        },
        {
          id: 4,
          email: 'eve.holt@reqres.in',
          first_name: 'Eve',
          last_name: 'Holt',
          avatar: 'https://reqres.in/img/faces/4-image.jpg'
        },
        {
          id: 5,
          email: 'charles.morris@reqres.in',
          first_name: 'Charles',
          last_name: 'Morris',
          avatar: 'https://reqres.in/img/faces/5-image.jpg'
        },
        {
          id: 6,
          email: 'tracey.ramos@reqres.in',
          first_name: 'Tracey',
          last_name: 'Ramos',
          avatar: 'https://reqres.in/img/faces/6-image.jpg'
        }
      ],
      support: {
        url: 'https://reqres.in/#support-heading',
        text: 'To keep ReqRes free, contributions towards server costs are appreciated!'
      }
    }
    ```

