/*
Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the
canonical path.
In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double
period .. moves the directory up a level.

Note that the returned canonical path must always begin with a slash /, and there must be only a
single slash / between two directory names. The last directory name (if it exists) must not end
with a trailing /. Also, the canonical path must be the shortest string representing the absolute
path.

Example 1:
Input: "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

Example 2:
Input: "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

Example 3:
Input: "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

Example 4:
Input: "/a/./b/../../c/"
Output: "/c"

Example 5:
Input: "/a/../../b/../c//.//"
Output: "/c"

Example 6:
Input: "/a//b////c/d//././/.."
Output: "/a/b/c"
*/

// Link: https://www.geeksforgeeks.org/simplify-directory-path-unix-like/
/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
    let splitPath = path.split("/");
    let stack = [];
    for (let i=0; i<splitPath.length; i++) {
        // Pop from stack as we move up a directory level
        if (splitPath[i] === "..") {
            if (stack.length)
                stack.pop();
        }
        else if (splitPath[i] === "...")
            stack.push("/...");
        // Push into stack whenever we see a file name
        else if (splitPath[i].match(/[a-zA-Z]+/))
            stack.push("/" + splitPath[i]);
    }
    if (!stack.length)
        return "/"
    else
        return stack.join('')
};

console.log(simplifyPath("/.../"));
console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/a/./b/../../c/"));
console.log(simplifyPath("/a/../../b/../c//.//"));
console.log(simplifyPath("/a//b////c/d//././/.."));

