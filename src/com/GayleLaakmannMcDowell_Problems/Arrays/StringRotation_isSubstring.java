package com.GayleLaakmannMcDowell_Problems.Arrays;

public class StringRotation_isSubstring {
    public static boolean Check_sub(String str1,String str2) {
        boolean flag=false;
        int length=str1.length();
        //waterbottleterbottlewa
        for(int i=0;i<=str2.length()-length;i++){
            if(str1.equalsIgnoreCase(str2.substring(i, i+length))) {
                flag=true;
                break;
            }
        }
        return flag;
    }
    public static void main(String[] args) {
        String str1="waterbottle";
        String str2="terbottlewa";
        String str3=str2+str1;
        System.out.println(Check_sub(str1,str3));
    }
}