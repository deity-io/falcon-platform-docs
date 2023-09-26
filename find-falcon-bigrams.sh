# Find sets of two words that start with 'falcon', case insensitive, and rank the findings by occurrence.
cd versioned_docs/version-3
find . -type f | xargs -I {} sh -c "cat {} | sed -e 'h;:a' -e 's/^ *\([^ ]\{1,\}\) \{1,\}\([^ ]\{1,\}\).*$/\1 \2/p;g;s/^ *[^ ]\{1,\}//;h;ta'" > ../../bigrams.txt
cat ../../bigrams.txt | grep -i ^falcon | tr '[:upper:]' '[:lower:]' | sort | uniq -c | sort -r > ../../falcon.txt